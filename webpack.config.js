const path = require("path")
// 所有的配置信息
module.exports = {
	mode: "development",
	// 入口文件
	entry: "./src/index.ts",
	// 指定打包文件所在目录
	output: {
		// 打包文件的目录
		path: path.resolve(__dirname, "dist"),
		// 打包后文件的文件名
		filename: "index.js",
		// 告诉webpack不使用箭头函数
		environment: {
			arrowFunction: false
		}
	},
	resolve: {
		extensions: [".ts"]
	},
	// 指定webpack打包使用的模块
	module: {
		// 指定加载的规则
		rules: [
			{
				// test是规则生效的文件
				// (使用ts-loader匹配ts结尾的文件)
				test: /\.ts$/,
				//排除的文件
				exclude: /node-modules/,
				use: [
					"ts-loader"
					// 配置babel
					// {
					// 	// 指定加载器
					// 	loader: "babel-loader",
					// 	// 设置babel
					// 	options: {
					// 		// 设置预定义环境
					// 		presets: [
					// 			[
					// 				// 指定环境的插件
					// 				"@babel/preset-env",
					// 				// 配置信息
					// 				{
					// 					// 兼容的目标浏览器
					// 					targets: {
					// 						chrome: "88"
					// 					},
					// 					// 制定corejs版本
					// 					corejs: "3",
					// 					// 使用corejs的方式“usage”：按需加载
					// 					useBuiltIns: "usage"
					// 				}
					// 			]
					// 		]
					// 	}
					// }
				]
			}
		]
	}
}
