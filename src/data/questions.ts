import afterProm from '@/assets/after-prom.jpg'
import calcBoq from '@/assets/calculus-bouquet.jpg'
import hebCart from '@/assets/heb-cart.jpg'
import terribleImage from '@/assets/terrible-photo.jpg'
import valGift from '@/assets/valentines-gift.jpg'

export type Choice = {
  text: string
  next: number | null
  disabled?: boolean
}

export type Question = {
  id: number
  text: string
  image?: string
  choices: Choice[]
}

export const questions: Question[] = [
  {
    id: 0,
    text: 'Hey...',
    choices: [{ text: 'hey..?', next: 1 }],
  },
  {
    id: 1,
    text: 'Who are you?',
    choices: [
      { text: 'Annika Lee', next: 2 },
      { text: '李依恩', next: 2 },
      { text: 'Not Annika Lee', next: 15 },
    ],
  },
  {
    id: 2,
    text: 'Are you sure?',
    choices: [
      { text: 'Yes.', next: 3 },
      { text: 'Uhhhhh maybe not...', next: 15 },
    ],
  },
  {
    id: 3,
    text: 'I want to believe you, but I need to ask some questions first just to make sure. OK?',
    choices: [
      { text: 'Fine', next: 4 },
      { text: 'Nope', next: 4, disabled: true },
    ],
  },
  {
    id: 4,
    text: "Hmmmmmmmmm... Let's start easy. When's your anniversary with Alvin?",
    choices: [
      { text: 'January 14, 2025', next: 15 },
      { text: 'January 15, 2025', next: 5 },
      { text: 'January 16, 2025', next: 15 },
      { text: 'January 17, 2025', next: 15 },
    ],
  },
  {
    id: 5,
    text: "Okay, if you're so good at dates then when did Alvin get his college acceptance? (You celebrated his birthday with HEB tiramisu on this day)",
    image: hebCart,
    choices: [
      { text: 'December 11, 2025', next: 15 },
      { text: 'December 12, 2025', next: 15 },
      { text: 'December 13, 2025', next: 6 },
      { text: 'December 14, 2025', next: 15 },
    ],
  },
  {
    id: 6,
    text: "Dang, you really are good at dates. Are you good with distances though? How far apart are you and Alvin's dorms? (approx.)",
    choices: [
      { text: '1220 mi', next: 16 },
      { text: '1220 km', next: 15 },
      { text: "1.22% of Earth's Diameter", next: 15 },
      { text: '12203751 ft', next: 15 },
    ],
  },
  {
    id: 16,
    text: "YKW? Since you're so good with numbers, here's one for you: On a scale from 1 to 5, how much does Alvin love you?",
    choices: [
      { text: '1', next: 7, disabled: true },
      { text: '2', next: 7, disabled: true },
      { text: '3', next: 7, disabled: true },
      { text: '4', next: 7, disabled: true },
      { text: '5', next: 7, disabled: true },
      { text: 'Infinity <3', next: 7 },
    ],
  },
  {
    id: 7,
    text: "Fine, I guess I can't keep quizzing you on numbers, so I'll dig into your memory instead. Before rehearsals, y'all usually went somewhere to do work. Where was that?",
    choices: [
      { text: 'Feng Cha', next: 15 },
      { text: 'The Orchestra Room', next: 15 },
      { text: 'Chi Cha San Chen', next: 15 },
      { text: 'Gong Cha', next: 8 },
    ],
  },
  {
    id: 8,
    text: "Hmmmm. After Prom, which restaurant's parking lot did y'all stay in until 2am?",
    image: afterProm,
    choices: [
      { text: "McDonald's", next: 15 },
      { text: "Wendy's", next: 15 },
      { text: 'Whataburger', next: 9 },
      { text: 'In-N-Out', next: 15 },
    ],
  },
  {
    id: 9,
    text: 'Dang, you still remember that? Alright, This was nearly a year ago, so no way you get it. Where did you two celebrate your first Valentines?',
    image: valGift,
    choices: [
      { text: 'Cat Haven Lounge', next: 10 },
      { text: 'China Town', next: 15 },
      { text: 'POST Market', next: 15 },
      { text: 'The Treehouse', next: 15 },
    ],
  },
  {
    id: 10,
    text: 'Alright, this is definitely something only Annika would know. What did Alvin start making his origami gifts out of?',
    choices: [
      { text: 'Sticky Notes', next: 15 },
      { text: 'Old Calculus Scratch Paper', next: 11 },
      { text: 'Construction Paper', next: 15 },
      { text: 'Origami Paper', next: 15 },
    ],
  },
  {
    id: 11,
    text: "OK, after all those questions I'm pretty sure you're Annika Lee, but there's just one final question that I must ask to guarantee that this is 100% positively Annika Lee.",
    image: calcBoq,
    choices: [{ text: '-->', next: 12 }],
  },
  {
    id: 12,
    text: 'How does this look? 🤨',
    image: terribleImage,
    choices: [
      { text: 'Terrible 😭', next: 17 },
      { text: 'Amazing!', next: 15 },
    ],
  },
  {
    id: 13,
    text: "So it IS the Annika Lee I've heard so much about. In that case, I can pass on the inquiry that I've been tasked with delivering to you from Alvin Wang.",
    choices: [{ text: '-->', next: 14 }],
  },
  {
    id: 14,
    text: 'Will you be my Valentine?',
    choices: [
      { text: 'YES!!!!', next: 17 },
      { text: 'No...', next: 15 },
    ],
  },
  {
    id: 15,
    text: "You're not Annika Lee... :(",
    choices: [{ text: 'Retry Questions', next: 0 }],
  },
]
