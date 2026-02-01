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
    text: 'Who is this?',
    choices: [
      { text: 'Annika Lee', next: 2 },
      { text: '李依恩', next: 2 },
      { text: 'Not Annika Lee', next: null },
    ],
  },
  {
    id: 2,
    text: 'Are you sure?',
    choices: [
      { text: 'Yes.', next: 3 },
      { text: 'Uhhhhh maybe not...', next: 3, disabled: true },
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
      { text: 'January 14, 2025', next: null },
      { text: 'January 15, 2025', next: 5 },
      { text: 'January 16, 2025', next: null },
      { text: 'January 17, 2025', next: null },
    ],
  },
  {
    id: 5,
    text: "Okay, if you're so good at dates then when did Alvin get his college acceptance? (You celebrated his birthday with HEB tiramisu on this day)",
    choices: [
      { text: 'December 11, 2025', next: null },
      { text: 'December 12, 2025', next: null },
      { text: 'December 13, 2025', next: 6 },
      { text: 'December 14, 2025', next: null },
    ],
  },
  {
    id: 6,
    text: "Dang, you really are good at dates. Are you good with distances though? How far apart are you and Alvin's dorms? (approx.)",
    choices: [
      { text: '1220 mi', next: 7 },
      { text: '1220 km', next: null },
      { text: '12203751 ft', next: null },
      { text: "1.22% of Earth's Diameter", next: null },
    ],
  },
  {
    id: 7,
    text: "Fine, I guess I can't keep quizzing you on numbers, so I'll dig into your memory instead. Before rehearsals, y'all usually went somewhere to do work. Where was that?",
    choices: [
      { text: 'Feng Cha', next: null },
      { text: 'Gong Cha', next: 8 },
      { text: 'The Orchestra Room', next: null },
      { text: 'Chi Cha San Chen', next: null },
    ],
  },
  {
    id: 8,
    text: "Hmmmm. After Prom, which restaurant's parking lot did y'all stay in until 2am?",
    choices: [
      { text: "McDonald's", next: null },
      { text: "Wendy's", next: null },
      { text: 'Whataburger', next: 9 },
      { text: 'In-N-Out', next: null },
    ],
  },
  {
    id: 9,
    text: 'Dang, you still remember that? Alright, This was nearly a year ago, so no way you get it. Where did you two celebrate your first Valentines?',
    choices: [
      { text: 'China Town', next: null },
      { text: 'POST Market', next: null },
      { text: 'Cat Haven Lounge', next: 10 },
      { text: 'The Treehouse', next: null },
    ],
  },
  {
    id: 10,
    text: 'Alright, this is definitely something only Annika would know. What did Alvin start making his origami gifts out of?',
    choices: [
      { text: 'Sticky Notes', next: null },
      { text: 'Old Calculus Scratch Paper', next: 11 },
      { text: 'Construction Paper', next: null },
      { text: 'Origami Paper', next: null },
    ],
  },
  {
    id: 11,
    text: "OK, after all those questions I'm pretty sure you're Annika Lee, but there's just one final question that I must ask to guaruntee that this is 100% positively Annika Lee.",
    choices: [{ text: '-->', next: 12 }],
  },
  {
    id: 12,
    text: 'How does this look?',
    choices: [
      { text: 'Terrible 😭', next: 13 },
      { text: 'Amazing!', next: null },
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
      { text: 'YES!!!!', next: 15 },
      { text: 'No...', next: null },
    ],
  },
]
