import ScrollFadeIn from '@/components/scrollFadeIn'
import { useEffect } from 'react';

export default function Animation({ posts, tags }: Props) {
  useEffect(() => {
    ScrollFadeIn();
  }, []);
  return (
    <article className={`u-animation-fadein`}></article>
  )
};
