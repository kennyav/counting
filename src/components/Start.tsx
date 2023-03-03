import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled';
import DotGrid from './DotGrid';
import Card from './Card.jsx';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const RotationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 1000px;
`;

const CardWrapper = styled(motion.div)`
  border-radius: 20px;
  backdrop-filter: blur(3px) brightness(120%);
`;


export default function Start() {

   // mouse position
   const mouseX = useMotionValue(
      typeof window !== 'undefined' ? window.innerWidth / 2 : 0
   );
   const mouseY = useMotionValue(
      typeof window !== 'undefined' ? window.innerHeight / 2 : 0
   );

   const cardRef = useRef<HTMLDivElement>(null);

   const dampen = 40;
   const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
      const newRotateX = newMouseY - rect.top - rect.height / 2;
      return -newRotateX / dampen;
   });
   const rotateY = useTransform(mouseX, (newMouseX) => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
      const newRotateY = newMouseX - rect.left - rect.width / 2;
      return newRotateY / dampen;
   });

   // handle mouse move on document
   useEffect(() => {
      const handleMouseMove = (e) => {
         // animate mouse x and y
         animate(mouseX, e.clientX);
         animate(mouseY, e.clientY);
      };
      if (typeof window === 'undefined') return;
      // recalculate grid on resize
      window.addEventListener('mousemove', handleMouseMove);
      // cleanup
      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <div className='start-menu'>
         <Container>
            <h1>
               Welcome To Counting
            </h1>
            <RotationWrapper style={{ rotateX, rotateY }}>
               <DotGrid />
               <CardWrapper ref={cardRef}>
                  <Card />
               </CardWrapper>
            </RotationWrapper>
         </Container>
      </div>
   )
}
