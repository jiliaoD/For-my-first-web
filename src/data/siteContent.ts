import { withAssetVersion } from '@/lib/assetUrl'

export const navItems = [
  { href: '#overview', label: '角色概览' },
  { href: '#highlights', label: '她为什么成立' },
  { href: '#narrative', label: '作品中的位置' },
  { href: '#gallery', label: '视觉停留' },
  { href: '#policy', label: '素材策略' },
]

export const heroStats = [
  { label: '主题基调', value: '春日轻叙事' },
  { label: '视觉重心', value: '低饱和粉 / 灰蓝 / 留白' },
  { label: '新增层次', value: '你的照片 + 可开关氛围音' },
]

export const heroVisual = {
  image: withAssetVersion('./photo/1.png'),
  alt: '加藤惠主题主视觉图',
}

export const backgroundVisual = withAssetVersion('./photo/back.png')

export const overviewFacts = [
  { label: '身份', value: '安艺伦也的同班同学，也是作品真正的核心女主角。' },
  { label: '气质', value: '温和、克制、低存在感，却有稳定而持久的吸引力。' },
  { label: '叙事功能', value: '从“背景里的人”逐渐走向真正的主角，是最贴合作品标题的展开方式。' },
  { label: '表达边界', value: '只使用公开稳定设定，默认轻剧透，不做党争与物化表达。' },
]

export const keyWords = [
  '普通感',
  '低存在感',
  '温和',
  '平静',
  '克制',
  '后劲',
  '陪伴感',
  '日常感',
  '轻微吐槽',
  '春日通学路',
  '樱花与风',
  '从背景到主角',
]

export const overviewPoints = [
  '页面把她理解为“从背景里慢慢走到中心的人”，而不是一张必须依赖肖像的角色海报。',
  '首屏和中段都依靠留白、纸面感、细线层级和渐变氛围组织内容，让注意力自然停下来。',
  '整体文案控制在轻剧透范围，只围绕公开稳定设定去描述气质、关系位置和叙事功能。',
]

export const highlightCards = [
  {
    eyebrow: '印象一',
    title: '不靠高声量也能成为中心',
    body:
      '她的魅力不来自夸张标签，而来自相处之后才会慢慢显形的稳定感。页面因此选择更轻的节奏，让注意力自己停下来。',
  },
  {
    eyebrow: '印象二',
    title: '细微反应比强烈设定更有分量',
    body:
      '轻淡的吐槽、平稳的回应、看似不抢戏的陪伴，共同构成了角色最耐看的部分。这些气质被转译成柔和的卡片、细线和模糊过渡。',
  },
  {
    eyebrow: '印象三',
    title: '她更像一种会留下来的氛围',
    body:
      '春日、坡道、空气感与日常光线，比具体肖像更能表达这份印象。站点主视觉因此完全用抽象背景与文字建立情绪。',
  },
]

export const companionPanels = [
  {
    title: '普通感不是空白，而是起点',
    body:
      '页面没有把“普通”写成标签堆叠，而是把它拆进留白、纤细分割线和较慢的阅读节奏里，让观者自己感受到那种后知后觉的靠近。',
  },
  {
    title: '主角感来自被看见的过程',
    body:
      '越往下滚动，层次越清晰，颜色越有重量。站点把“从背景走向中心”转换成排版和明暗关系，而不是戏剧化的剧情重述。',
  },
]

export const narrativeSteps = [
  {
    step: '01',
    title: '从樱花坡道开始',
    body:
      '作品的起点带有典型的春日邂逅感。这里不展开具体剧情，而是保留那种“好像命运感刚刚出现”的轻盈开场。',
  },
  {
    step: '02',
    title: '先被忽略，再慢慢被看见',
    body:
      '“普通”与“低存在感”并不是削弱，而是她独特的叙事起点。人物真正成立的过程，是从背景里逐渐走向中心。',
  },
  {
    step: '03',
    title: '稳定感支撑起关系与节奏',
    body:
      '她不是被动陈列的对象，也在创作搭档与关系缓冲中承担作用。页面中段因此把重点放在陪伴感、分寸感与后劲。',
  },
  {
    step: '04',
    title: '最后留住记忆的是克制',
    body:
      '比起爆发式情绪，更能留存的是安静、分明、不过量的存在。这也是页尾收束为简短说明与素材边界提示的原因。',
  },
]

export const gallerySlides = [
  {
    kicker: 'Scene 01',
    title: '坡道与微风',
    description: '把相遇的命运感压低到只剩空气感、柔光和一点点向上延伸的视线。',
    details: ['柔和暖白底色', '灰蓝阴影控制甜感', '漂浮感装饰层'],
    caption: '用斜向线条和漂浮光斑模拟坡道的视线引导。',
    image: withAssetVersion('./photo/2.png'),
    alt: '加藤惠主题轮播图一',
  },
  {
    kicker: 'Scene 02',
    title: '窗边与书页',
    description: '没有角色图时，纸张、玻璃、布料和安静的界面文字足以成立一整屏观感。',
    details: ['半透明材质', '薄雾遮罩', '细线结构分层'],
    caption: '面板边缘刻意拉得很轻，让内容像压在纸面和玻璃之间。',
    image: withAssetVersion('./photo/3.png'),
    alt: '加藤惠主题轮播图二',
  },
  {
    kicker: 'Scene 03',
    title: '日常里的主角化',
    description: '把“从背景走向中心”的过程做成轮播里的节奏变化，而不是戏剧化反转。',
    details: ['前景轻卡片', '标题慢入场', '微量 hover 抬升'],
    caption: '最后一屏把层级和对比稍微加深，但依然保持克制。',
    image: withAssetVersion('./photo/4.png'),
    alt: '加藤惠主题轮播图三',
  },
]

export const atmosphereQuotes = [
  '她的特别，不在第一眼，而在停留之后。',
  '你以为她只是背景，但她最后会留在页面中心。',
  '比起强烈，她更接近一种安静而稳定的吸引力。',
]

export const materialPolicies = [
  {
    title: '主视觉换成你的收藏图',
    body:
      '当前版本已经接入你提供的主视觉图和三张轮播图，页面的停留感会比之前更直接，也更像真正的角色主题页。',
  },
  {
    title: '加入可开关的氛围音乐',
    body:
      '首屏加入了手动开启的春日氛围音按钮，不会自动打断浏览，但能让页面在静态展示之外多一层听觉氛围。',
  },
  {
    title: '面向静态部署收束',
    body:
      '整站维持单页锚点结构和相对资源路径，构建后直接输出 `dist/` 目录，可由 Nginx 托管展示。',
  },
]

export const footerNotes = [
  '本站现在接入了你自己准备的主视觉图、轮播图和背景图，让页面不再只靠文字与色块支撑氛围。',
  '背景音乐改为手动开启的春日氛围音，进入页面时仍然保持安静，不会强行自动播放。',
  '所有页面内容仍保持轻叙事表达，重点放在气质、场景和印象，而不是把页面做成纯素材堆叠。',
]
