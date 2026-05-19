interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '项目一',
    description: '这是一个示例项目，你可以在这里添加你的项目描述。',
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com',
  },
  {
    title: '项目二',
    description: '另一个示例项目，展示你所做的其他工作。',
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com',
  },
]

export default projectsData
