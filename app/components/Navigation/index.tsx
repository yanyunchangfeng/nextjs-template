'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, memo } from 'react';

const Navigation: FC = () => {
  const path = usePathname(); // 获取当前路径
  const router = useRouter();
  const notesClasses = clsx('hover:text-pink-600', {
    'text-black': path !== '/notes'
  });
  const blogClasses = clsx('hover:text-pink-600', {
    'text-black': path !== '/blog'
  });
  const homeClasses = clsx('hover:text-pink-600', {
    'text-black': path !== '/'
  });
  return (
    <nav className="flex items-center justify-center gap-5 text-pink-500 my-5">
      <Link href="/notes" className={notesClasses}>
        notes
      </Link>
      <Link href="/blog" className={blogClasses}>
        blog
      </Link>
      {/* <Link href="/a" className={path === '/a' || path === '/b' ? 'text-blue' : 'text-black'}>
        a/b
      </Link> */}
      {/* <Link href="/dashboard" className={path === '/dashboard' ? 'text-blue' : 'text-black'}>
        db
      </Link> */}
      {/* <Link
        href="/about"
        className={path === '/about' || path === '/settings' || path === '/team' ? 'text-blue' : 'text-black'}
      >
        (db)
      </Link> */}
      {/* <Link href="/page-views" className={path === '/page-views' ? 'text-blue' : 'text-black'}>
        views
      </Link> */}
      {/* <Link href="/visitors" className={path === '/visitors' ? 'text-blue' : 'text-black'}>
        visitors
      </Link> */}
      {/* <Link href="/hy" className={path === '/hy' ? 'text-blue' : 'text-black'}>
        hy
      </Link> */}

      {/* App Router 的默认行为是滚动到新路由的顶部，
    或者在前进后退导航时维持之前的滚动距离。
    如果你想要禁用这个行为，你可以给 <Link> 组件传递一个 scroll={false}属性，
    或者在使用 router.push和 router.replace的时候，设置 scroll: false */}
      <button onClick={() => router.push('/?redirect=false', { scroll: false })} className={homeClasses}>
        home
      </button>
    </nav>
  );
};

export default memo(Navigation);
