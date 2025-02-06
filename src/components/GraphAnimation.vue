<template>
  <canvas ref="canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none;"></canvas>
</template>

<script>
export default {
  name: 'GraphAnimation',
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;

      // Resize the canvas to fill the parent container's size
      const resizeCanvas = () => {
        // Since our canvas is inside the hero, use parent dimensions
        const parent = canvas.parentNode;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Particle system settings
      const particleCount = 50;
      const maxDistance = 150;
      const particles = [];

      // Particle constructor
      function Particle() {
        this.x = Math.random() * canvas.width / dpr;
        this.y = Math.random() * canvas.height / dpr;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width/dpr, canvas.height/dpr);

        // Draw each particle
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off the edges of the canvas
          if (p.x < 0 || p.x > canvas.width/dpr) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height/dpr) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#4A90E2'; // Blue to match theme
          ctx.fill();
        });

        // Draw lines between particles that are close
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDistance) {
              const opacity = 1 - dist / maxDistance;
              ctx.strokeStyle = `rgba(74, 144, 226, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animate);
      };

      animate();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeCanvas);
  }
}
</script>

<style scoped>
/* No additional styles needed */
</style> 