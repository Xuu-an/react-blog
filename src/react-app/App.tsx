// src/App.tsx

// 主页面结构，包括作品集、个人简介、联系方式等模块
import reactLogo from "./assets/react.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";

// 示例作品数据
const works = [
  {
    title: "极简风格 UI 套件",
    image: reactLogo,
    description: "一套适用于多端的极简 UI 组件库设计。",
    link: "#",
  },
  {
    title: "品牌 LOGO 设计",
    image: honoLogo,
    description: "为初创企业定制的品牌标识与视觉规范。",
    link: "#",
  },
];

const profile = {
  name: "AMeng",
  title: "视觉设计师 / UI 设计师",
  desc: "热爱极简与实用主义，专注于数字产品设计与品牌视觉。",
  email: "ameng@example.com",
  wechat: "ameng-design",
};

function App() {
  return (
    <div className="ameng-main">
      <header className="ameng-header">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.desc}</p>
      </header>
      <section className="ameng-works">
        <h3>设计作品集</h3>
        <div className="works-list">
          {works.map((work, idx) => (
            <div className="work-item" key={idx}>
              <img src={work.image} alt={work.title} className="work-img" />
              <h4>{work.title}</h4>
              <p>{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                查看详情
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="ameng-contact">
        <h3>联系方式</h3>
        <ul>
          <li>
            邮箱：
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>微信：{profile.wechat}</li>
        </ul>
      </section>
      <footer className="ameng-footer">
        <span>部署于</span>
        <img
          src={cloudflareLogo}
          className="logo cloudflare"
          alt="Cloudflare logo"
        />
      </footer>
    </div>
  );
}

export default App;
