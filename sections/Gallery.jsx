'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { BlogCard, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion'
import { blog } from '../constants';

const Blog = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Blog' textStyles='text-center' />
      <TitleText title='Latest Posts' textStyles='text-center' />

      <div className={`mt-[70px] flex flex-col xl:flex-row wrap gap-[30px] max-w-[1000px] mx-auto`}>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
  <div class="h-32 rounded-lg bg-gray-200"></div>
  <div class="h-32 rounded-lg bg-gray-200"></div>
  <div class="h-32 rounded-lg bg-gray-200"></div>
  <div class="h-32 rounded-lg bg-gray-200"></div>
</div>
      </div>
    </motion.div>
  </section>
);

export default Blog;
