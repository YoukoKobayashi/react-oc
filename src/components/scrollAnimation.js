import ScrollFadeIn from '@/components/scrollFadeIn'
import { useEffect } from 'react';

export default function Animation({ Props }) {
  useEffect(() => {
    ScrollFadeIn();
  }, []);
  return (
    <div className={`$[is-slideIn]`}></div>
  )
};
