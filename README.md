const prompts = [
  {
    tag: 'লেখা',
    title: 'লেখা উন্নত করুন',
    description: 'পাঠ্যটি পরিষ্কার, প্রাঞ্জল এবং প্রফেশনাল বাংলায় রূপান্তর করুন।',
    prompt: 'এই লেখাটি সহজ, প্রাঞ্জল ও ব্যাকরণগতভাবে শুদ্ধ বাংলায় পুনর্লিখুন। মূল অর্থ অপরিবর্তিত রাখুন এবং ৩টি উন্নতির পরামর্শ দিন।\n\nলেখা:\n[এখানে লিখুন]'
  },
  {
    tag: 'সারাংশ',
    title: 'সংক্ষিপ্ত সারাংশ',
    description: 'দীর্ঘ লেখা থেকে গুরুত্বপূর্ণ তথ্য দ্রুত বের করে নিন।',
    prompt: 'নিচের লেখাটির ৫টি সবচেয়ে গুরুত্বপূর্ণ পয়েন্ট বাংলায় লিখুন। তারপর ৫০ শব্দের একটি সংক্ষিপ্ত সারাংশ দিন।\n\nলেখা:\n[এখানে লিখুন]'
  },
  {
    tag: 'শিক্ষা',
    title: 'পড়াশোনার পরিকল্পনা',
    description: 'বিষয়ভিত্তিক শিখার জন্য বাস্তবসম্মত সময়সূচী তৈরি করুন।',
    prompt: 'আমি [বিষয়] শিখতে চাই। আমার হাতে [সময়] আছে এবং আমি [স্তর] অবস্থায় আছি। বাংলায় একটি দৈনিক শেখার পরিকল্পনা, অনুশীলন ও মূল্যায়নের ধাপ তৈরি করুন।'
  },
  {
    tag: 'ব্যবসা',
    title: 'ব্যবসার আইডিয়া',
    description: 'আপনার দক্ষতা ও বাজেট অনুযায়ী ছোট ব্যবসার ধারণা খুঁজুন।',
    prompt: 'আমার দক্ষতা [দক্ষতা], বাজেট [বাজেট], এবং লক্ষ্য গ্রাহক [গ্রাহক]। কম ঝুঁকিতে শুরু করা যায় এমন ৫টি ব্যবসার ধারণা দিন এবং প্রতিটির প্রথম ৩টি ধাপ লিখুন।'
  },
  {
    tag: 'সোশ্যাল',
    title: 'ফেসবুক পোস্ট',
    description: 'আকর্ষণীয় পোস্টের জন্য কার্যকর বাংলা কনটেন্ট তৈরি করুন।',
    prompt: '[বিষয়] নিয়ে বাংলায় একটি আকর্ষণীয় ফেসবুক পোস্ট লিখুন। ভাষা হবে প্রাঞ্জল, 100-150 শব্দের মধ্যে, শেষে একটি প্রশ্ন এবং ৫টি হ্যাশট্যাগ দিন।'
  },
  {
    tag: 'উৎপাদন',
    title: 'আইডিয়া থেকে রোডম্যাপ',
    description: 'একটি ধারণাকে বাস্তবায়নের জন্য ধাপে ভাগ করুন।',
    prompt: 'আমার প্রকল্পের ধারণা: [ধারণা]। লক্ষ্য: [লক্ষ্য]। বাংলায় ৩০ দিনের একটি বাস্তবায়ন রোডম্যাপ তৈরি করুন, যেখানে সাপ্তাহিক লক্ষ্য, কাজের অগ্রাধিকার ও সাফল্য মাপার উপায় থাকবে।'
  },
  {
    tag: 'ইমেইল',
    title: 'প্রফেশনাল ইমেইল',
    description: 'বাণিজ্যিক বা অফিসিয়াল ইমেইলকে সুন্দর ও কার্যকর করে তুলুন।',
    prompt: 'একজন [পেশা/উদ্দেশ্য]কে উদ্দেশ্য করে বাংলায় একটি প্রফেশনাল ইমেইল লিখুন। বিষয়: [বিষয়], উদ্দেশ্য: [উদ্দেশ্য], ভাষা: cordial but professional. শেষে একটি সজ্জিত বন্ধনী দিন।'
  },
  {
    tag: 'কনটেন্ট',
    title: 'ব্লগ পোস্ট',
    description: 'বিষয়ভিত্তিক ব্লগ পোস্টের কাঠামো ও উপস্থাপনা সাজান।',
    prompt: 'বাংলায় [বিষয়] নিয়ে একটি আকর্ষণীয় ব্লগ পোস্ট লিখুন। পোস্টে 제목, ভূমিকা, ৩টি মূল অংশ, ৫টি গুরুত্বপূর্ণ তথ্য এবং উপসংহার দিন।'
  }
];

const grid = document.querySelector('#prompt-grid');
const searchInput = document.querySelector('#search');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const yearNode = document.querySelector('#year');

function renderPrompts(items) {
  grid.innerHTML = '';

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'prompt-card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = item.tag;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const hiddenPrompt = document.createElement('div');
    hiddenPrompt.className = 'prompt-text';
    hiddenPrompt.textContent = item.prompt;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'কপি করুন';

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(item.prompt);
        const previous = button.textContent;
        button.textContent = 'কপি হয়েছে';
        button.classList.add('copied');

        setTimeout(() => {
          button.textContent = previous;
          button.classList.remove('copied');
        }, 1200);
      } catch (error) {
        button.textContent = 'কপি ব্যর্থ';
        setTimeout(() => {
          button.textContent = 'কপি করুন';
        }, 1200);
      }
    });

    card.append(tag, title, description, hiddenPrompt, button);
    grid.appendChild(card);
  });
}

function updateResults(items) {
  resultCount.textContent = `${items.length}টি prompt দেখানো হচ্ছে`;
  emptyState.hidden = items.length !== 0;
}

function filterPrompts(searchTerm) {
  const term = searchTerm.trim().toLowerCase();

  const filtered = prompts.filter((item) => {
    const searchable = [item.title, item.description, item.prompt, item.tag].join(' ').toLowerCase();
    return searchable.includes(term);
  });

  renderPrompts(filtered);
  updateResults(filtered);
}

searchInput.addEventListener('input', (event) => {
  filterPrompts(event.target.value);
});

yearNode.textContent = new Date().getFullYear();
renderPrompts(prompts);
updateResults(prompts);
