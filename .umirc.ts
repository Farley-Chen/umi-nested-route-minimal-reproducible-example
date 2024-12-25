import { defineConfig } from "umi";

export default defineConfig({
    routes: [
        {
            path: "/app",
            component: "./index",
            routes: [
                // 显示的组件仍然是./index
                {
                    path: "/app/docs",
                    component: "./docs"
                }
            ]
        },
        // 以下配置可以正常工作
        // {
        //     path: "/app",
        //     component: "./index",
        // },
        // {
        //     path: "/app/docs",
        //     component: "./docs"
        // },
    ],
    npmClient: 'npm',
});
