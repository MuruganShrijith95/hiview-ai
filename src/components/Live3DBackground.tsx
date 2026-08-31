"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Live3DBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x18233f, 0.0007);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 600;
    camera.position.y = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x18233f, 0);
    container.appendChild(renderer.domElement);

    // 2. Global Logistics Holographic 3D Globe with Trade Arcs
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroup.position.set(220, -40, -100);

    // Globe Core Sphere Wireframe
    const globeGeometry = new THREE.SphereGeometry(180, 36, 36);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(globeMesh);

    // Inner Glow Sphere
    const innerGeo = new THREE.SphereGeometry(175, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x061a33,
      transparent: true,
      opacity: 0.45
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerMesh);

    // Continental Point Cloud on Globe
    const globeParticlesCount = 750;
    const globePositions = new Float32Array(globeParticlesCount * 3);
    const globeColors = new Float32Array(globeParticlesCount * 3);

    for (let i = 0; i < globeParticlesCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 182 + (Math.random() - 0.5) * 4;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      globePositions[i * 3] = x;
      globePositions[i * 3 + 1] = y;
      globePositions[i * 3 + 2] = z;

      // Color variation (Cyan to Gold to Electric Blue)
      if (i % 4 === 0) {
        globeColors[i * 3] = 0.0; // R
        globeColors[i * 3 + 1] = 0.94; // G
        globeColors[i * 3 + 2] = 1.0; // B (Cyan)
      } else if (i % 6 === 0) {
        globeColors[i * 3] = 0.96; // R
        globeColors[i * 3 + 1] = 0.62; // G
        globeColors[i * 3 + 2] = 0.04; // B (Amber/Gold)
      } else {
        globeColors[i * 3] = 0.23; // R
        globeColors[i * 3 + 1] = 0.55; // G
        globeColors[i * 3 + 2] = 0.98; // B (Blue)
      }
    }

    const globeParticleGeo = new THREE.BufferGeometry();
    globeParticleGeo.setAttribute("position", new THREE.BufferAttribute(globePositions, 3));
    globeParticleGeo.setAttribute("color", new THREE.BufferAttribute(globeColors, 3));

    const globeParticleMat = new THREE.PointsMaterial({
      size: 4.6,
      vertexColors: true,
      transparent: true,
      opacity: 1.0
    });
    const globePoints = new THREE.Points(globeParticleGeo, globeParticleMat);
    globeGroup.add(globePoints);

    // Global Trade Arcs Curve Splines
    const arcCount = 14;
    const arcLines: THREE.Line[] = [];

    for (let k = 0; k < arcCount; k++) {
      // Pick 2 random points on sphere
      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * 280,
        (Math.random() - 0.5) * 280,
        (Math.random() - 0.5) * 280
      ).normalize().multiplyScalar(182);

      const p2 = new THREE.Vector3(
        (Math.random() - 0.5) * 280,
        (Math.random() - 0.5) * 280,
        (Math.random() - 0.5) * 280
      ).normalize().multiplyScalar(182);

      // Midpoint elevated for arc
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(220 + Math.random() * 40);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

      const curveMat = new THREE.LineBasicMaterial({
        color: k % 2 === 0 ? 0x00f0ff : 0xf59e0b,
        transparent: true,
        opacity: 0.65 + Math.random() * 0.35
      });

      const line = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(line);
      arcLines.push(line);
    }

    // 3. Dynamic 3D Undulating Wave Mesh Terrain (Bottom Field)
    const waveCols = 55;
    const waveRows = 40;
    const waveCount = waveCols * waveRows;
    const wavePositions = new Float32Array(waveCount * 3);
    const waveColors = new Float32Array(waveCount * 3);

    for (let ix = 0; ix < waveCols; ix++) {
      for (let iy = 0; iy < waveRows; iy++) {
        const index = (ix * waveRows + iy) * 3;
        wavePositions[index] = (ix - waveCols / 2) * 45;
        wavePositions[index + 1] = -320; // Bottom position
        wavePositions[index + 2] = (iy - waveRows / 2) * 45;

        // Gradient coloring
        const ratio = iy / waveRows;
        waveColors[index] = 0.0 + ratio * 0.1;
        waveColors[index + 1] = 0.5 + ratio * 0.45;
        waveColors[index + 2] = 0.9 + ratio * 0.1;
      }
    }

    const waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute("color", new THREE.BufferAttribute(waveColors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: 3.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
    scene.add(wavePoints);

    // 4. Floating 3D Volumetric Supply Chain Data Cubes
    const cubeCount = 28;
    const cubes: THREE.Mesh[] = [];
    const cubeGeo = new THREE.BoxGeometry(14, 14, 14);

    for (let c = 0; c < cubeCount; c++) {
      const cubeMat = new THREE.MeshBasicMaterial({
        color: c % 3 === 0 ? 0x00f0ff : c % 3 === 1 ? 0xa855f7 : 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.6 + Math.random() * 0.35
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);

      cube.position.set(
        (Math.random() - 0.5) * 1200,
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 500 - 150
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      scene.add(cube);
      cubes.push(cube);
    }

    // 5. Parallax & Scroll Listeners
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.35;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.35;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate Globe & Trade System
      globeGroup.rotation.y = elapsedTime * 0.12;
      globeGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15;
      globeGroup.position.x = 260 + mouseX * 0.2;
      globeGroup.position.y = -40 - mouseY * 0.2 - scrollY * 0.08;

      // Animate Wave Mesh Heights (Smooth Undulation)
      const posAttr = waveGeometry.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      let idx = 0;
      for (let ix = 0; ix < waveCols; ix++) {
        for (let iy = 0; iy < waveRows; iy++) {
          const u = ix / waveCols;
          const v = iy / waveRows;
          const height =
            Math.sin(u * 8 + elapsedTime * 1.5) * 22 +
            Math.cos(v * 6 + elapsedTime * 1.2) * 22;

          array[idx + 1] = -320 + height;
          idx += 3;
        }
      }
      posAttr.needsUpdate = true;

      // Rotate & Float 3D Cubes
      for (let i = 0; i < cubes.length; i++) {
        const cube = cubes[i];
        cube.rotation.x += 0.008 * (i % 2 === 0 ? 1 : -1);
        cube.rotation.y += 0.01 * (i % 3 === 0 ? 1 : -1);
        cube.position.y += Math.sin(elapsedTime * 1.2 + i) * 0.4;
      }

      // Camera 3D Parallax Position based on mouse and scroll
      camera.position.x = mouseX * 0.6;
      camera.position.y = 80 - mouseY * 0.6 - scrollY * 0.15;
      camera.lookAt(0, -scrollY * 0.1, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-100"
    />
  );
}
