
export const createParticles = (effectsContainer: HTMLElement) => {
  const colors = ['#22c55e', '#84cc16', '#10b981']; // Green theme
  const particleCount = 12; // Fewer particles
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'spiral-particle';
    particle.style.cssText = `
      position: absolute;
      width: 3px;
      height: 3px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 6px currentColor;
      animation: compact-spiral-particle 1s ease-out forwards;
      transform-origin: center;
    `;
    
    const angle = (i / particleCount) * 360;
    const velocity = 40 + Math.random() * 30;
    particle.style.setProperty('--angle', `${angle}deg`);
    particle.style.setProperty('--velocity', `${velocity}px`);
    
    effectsContainer.appendChild(particle);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes compact-spiral-particle {
      0% {
        transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1);
        opacity: 0.8;
      }
      100% {
        transform: translate(-50%, -50%) rotate(calc(var(--angle) + 180deg)) translateX(var(--velocity)) scale(0);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

export const createVortexRings = (effectsContainer: HTMLElement) => {
  const colors = [
    'rgba(34, 197, 94, 0.6)', 
    'rgba(132, 204, 22, 0.6)', 
    'rgba(16, 185, 129, 0.6)'
  ];
  
  for (let i = 0; i < 2; i++) {
    const ring = document.createElement('div');
    ring.className = 'compact-vortex-ring';
    ring.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: compact-vortex-spin 1s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      box-shadow: 0 0 10px ${colors[i]};
    `;
    effectsContainer.appendChild(ring);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes compact-vortex-spin {
      0% {
        width: 30px;
        height: 30px;
        opacity: 0.8;
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        width: 120px;
        height: 120px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createSpiralTunnel = (effectsContainer: HTMLElement) => {
  const colors = [
    'rgba(34, 197, 94, 0.4)', 
    'rgba(132, 204, 22, 0.4)'
  ];
  
  for (let i = 0; i < 3; i++) {
    const tunnel = document.createElement('div');
    tunnel.className = 'compact-spiral-tunnel';
    tunnel.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid ${colors[i % colors.length]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: compact-spiral-tunnel 1.2s ease-out forwards;
      animation-delay: ${i * 0.05}s;
      box-shadow: 0 0 8px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(tunnel);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes compact-spiral-tunnel {
      0% {
        width: 20px;
        height: 20px;
        opacity: 0.6;
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        width: 140px;
        height: 140px;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createEnergyWaves = (effectsContainer: HTMLElement) => {
  const colors = [
    'rgba(34, 197, 94, 0.5)', 
    'rgba(132, 204, 22, 0.5)'
  ];
  
  for (let i = 0; i < 2; i++) {
    const wave = document.createElement('div');
    wave.className = 'compact-energy-wave';
    wave.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid ${colors[i]};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: compact-energy-pulse 1s ease-out forwards;
      animation-delay: ${i * 0.15}s;
      box-shadow: 0 0 12px ${colors[i]};
    `;
    effectsContainer.appendChild(wave);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes compact-energy-pulse {
      0% {
        width: 20px;
        height: 20px;
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        width: 100px;
        height: 100px;
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createLightning = (effectsContainer: HTMLElement) => {
  const colors = ['#22c55e', '#84cc16'];
  
  for (let i = 0; i < 4; i++) {
    const bolt = document.createElement('div');
    bolt.className = 'compact-lightning-bolt';
    bolt.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 30px;
      background: linear-gradient(0deg, transparent, ${colors[i % colors.length]}, transparent);
      transform-origin: bottom center;
      transform: translate(-50%, -50%) rotate(${i * 90}deg);
      animation: compact-lightning-flash 0.8s ease-out forwards;
      animation-delay: ${i * 0.05}s;
      box-shadow: 0 0 6px ${colors[i % colors.length]};
    `;
    effectsContainer.appendChild(bolt);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes compact-lightning-flash {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(0);
      }
      30% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) scaleY(0);
      }
    }
  `;
  document.head.appendChild(style);
};

export const createFlash = (effectsContainer: HTMLElement) => {
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: compact-portal-flash 1s ease-out forwards;
    z-index: 9999;
  `;
  effectsContainer.appendChild(flash);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes compact-portal-flash {
      0% {
        width: 50px;
        height: 50px;
        opacity: 0;
        background: radial-gradient(circle, rgba(255,255,255,0) 0%, transparent 100%);
      }
      40% {
        width: 100px;
        height: 100px;
        opacity: 0.9;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(34,197,94,0.5) 40%, transparent 80%);
      }
      100% {
        width: 160px;
        height: 160px;
        opacity: 0;
        background: radial-gradient(circle, rgba(255,255,255,0) 0%, transparent 100%);
      }
    }
  `;
  document.head.appendChild(style);
};
