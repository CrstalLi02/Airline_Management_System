import React from 'react';

const TestPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>测试页面 - 内联样式</h1>
      
      <div className="p-4 m-4 bg-blue-100 text-blue-800 rounded">
        <p className="font-bold">这是使用Tailwind CSS类的元素</p>
        <p className="mt-2">如果您能看到蓝色背景和较大边距，说明Tailwind CSS已正确加载</p>
      </div>
      
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Tailwind按钮
      </button>
      
      <a href="/" className="block mt-4 text-blue-500 hover:underline">
        返回首页
      </a>
    </div>
  );
};

export default TestPage; 