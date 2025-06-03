import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce particles dramatically on mobile for performance
  const particleCount = isMobile ? 1000 : 5000;
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(particleCount), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower rotation on mobile to reduce GPU load
      const rotationSpeed = isMobile ? 20 : 10;
      ref.current.rotation.x -= delta / rotationSpeed;
      ref.current.rotation.y -= delta / (rotationSpeed + 5);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isMobile ? 0.003 : 0.002} // Slightly larger on mobile for visibility
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Disable stars on very small devices or low-end devices
      if (mobile && window.innerWidth <= 480) {
        setShouldRender(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Don't render on very small screens for performance
  if (!shouldRender) {
    return (
      <div className="w-full h-auto absolute inset-0 z-[-1] bg-gradient-to-b from-transparent to-primary/20" />
    );
  }

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: !isMobile, // Disable antialiasing on mobile for performance
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        {!isMobile && <Preload all />}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
