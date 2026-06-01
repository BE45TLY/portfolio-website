export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // Supports multi-paragraph text separated by double newlines
  readTime: string;
  img?: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "finance-and-ai",
    title: "Bridging the Gap: How Finance Meets AI in My Daily Life",
    date: "June 1, 2026",
    category: "Tech & Finance",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    excerpt: "Exploring how artificial intelligence is changing financial forecasting, modeling, and how I'm learning to leverage AI tools to make work smarter.",
    tags: ["AI", "Finance", "Tech", "Student Life"],
    content: `Artificial intelligence is no longer just a sci-fi concept; it is actively reshaping how we think about productivity, learning, and business. As a BBA student majoring in Finance at North South University, I often find myself looking at the intersection of traditional business principles and cutting-edge tech.

For a long time, finance was purely about historical spreadsheets, ledger books, and rigid statistical models. But today, the most successful minds are those who can leverage algorithms and automated insights to make sense of vast datasets. 

I've been experimenting with various AI systems to summarize market news, clean financial data, and automate repetitious tasks. It's fascinating how a process that once took hours can now be conceptualized in minutes, leaving more space for creative strategy and human judgment.

My goal is not just to study finance, but to master the tools that will define the next decade of industry. Whether you're analyzing stock trends or just building a personal budget, incorporating modern AI tools is a superpower. I'm excited to keep exploring, testing, and sharing my findings right here.`
  },
  {
    id: "lessons-from-messi",
    title: "What Lionel Messi Taught Me About Facing Life's Challenges",
    date: "May 15, 2026",
    category: "Reflections",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    excerpt: "More than just football. A personal reflection on grit, silent execution, and why the Argentine genius is a masterclass in perseverance.",
    tags: ["Football", "Motivation", "Messi", "Mindset"],
    content: `If you know me, you know I am a die-hard Lionel Messi fan. To many, he is the Greatest of All Time (GOAT) because of his statistics, his Ballon d'Or trophies, or his World Cup victory. But to me, his journey is a masterclass in attitude and resilience.

Throughout his career, Messi has faced immense pressure. From early physical struggles to national team heartbreaks and intense media criticism, his response was rarely vocal. He didn't make flashy statements in press conferences or get involved in social media drama. He answered on the pitch.

This "silent execution" is something I try to apply in my own life. Whether I'm struggling with a tough university course, navigating freelancing client demands, or learning a difficult new programming skill, the noise doesn't matter. What matters is showing up, practicing, and letting the work speak for itself.

Success isn't linear. It took Messi decades of heartbreak to lift the World Cup. It teaches us that persistence, humility, and quiet determination are what get us over the finish line. Next time you hit a wall, channel that focus. Keep dribbling.`
  }
];
