import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';
import myImage from '@/public/assets/home.png';
import { Navigation } from '@/app/components';
// import { isDynamic } from './shared';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

// const userIsLogin = async () => {
//   return Math.random() > 0.5;
// };

export const metadata: Metadata = {
  title: 'yanyunchangfeng',
  description: 'Generated by yanyunchangfeng'
};
// app 目录必须包含根布局，也就是 app/layout.tsx 这个文件是必需的。
// 根布局必须包含 html 和 body标签，其他布局不能包含这些标签。如果你要更改这些标签，不推荐直接修改，参考《Metadata 篇》。
// 你可以使用路由组创建多个根布局。
// 默认根布局是服务端组件，且不能设置为客户端组件。

// 3. 平行路由（Parallel Routes）
// 平行路由可以使你在同一个布局中同时或者有条件的渲染一个或者多个页面（类似于  的插槽功能）。
// 3.1. 用途 1：条件渲染
// 3.2. 用途 2：独立路由处理
// 平行路由可以让你为每个路由定义独立的错误处理和加载界面：
// 3.3. 用途 3：子导航

// 最后，让我们总结一下使用平行路由的优势：
// 使用平行路由可以将单个布局拆分为多个插槽，使代码更易于管理，尤其适用于团队协作的时候
// 每个插槽都可以定义自己的加载界面和错误状态，比如某个插槽加载速度比较慢，那就可以加一个加载效果，加载期间，也不会影响其他插槽的渲染和交互。当出现错误的时候，也只会在具体的插槽上出现错误提示，而不会影响页面其他部分，有效改善用户体验
// 每个插槽都可以有自己独立的导航和状态管理，这使得插槽的功能更加丰富，比如在上面的例子中，我们在 @analytics 插槽下又建了查看页面 PV 的 /page-views、查看访客的 /visitors，使得同一个插槽区域可以根据路由显示不同的内容

// 4. 拦截路由（Intercepting Routes）
// 拦截路由允许你在当前路由拦截其他路由地址并在当前路由中展示内容。
// 在 Next.js 中，实现拦截路由需要你在命名文件夹的时候以 (..) 开头，其中：

// (.) 表示匹配同一层级
// (..) 表示匹配上一层级
// (..)(..) 表示匹配上上层级。
// (...) 表示匹配根目录

export default function RootLayout({
  children
}: // teams,
// analytics,
// dashboard,
// login
// modal
{
  children: React.ReactNode;
  // teams: React.ReactNode;
  // analytics: React.ReactNode;
  // dashboard: never;
  // login: never;
  // modal: never;
}) {
  // const isLogin = use(userIsLogin());

  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
        style={{
          backgroundImage: `url(${myImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex flex-col h-full px-4">
          <Navigation />
          <div className="flex flex-1">{children}</div>
        </div>
        {/* <div className="flex gap-6 ">
            {teams}
            {analytics}
          </div> */}
        {/* <div className="flex mt-6">{isLogin ? dashboard : login}</div> */}

        {/* {isDynamic ? modal : null} */}
        <SpeedInsights />
      </body>
    </html>
  );
}

// 也就是说 layout 会包裹 template，template 又会包裹 page。
