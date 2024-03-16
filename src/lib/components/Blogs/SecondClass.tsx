'use client';

import BlogPost from './BlogPost'; // Adjust the import path as necessary

const SecondClassContent = {
  title: 'Leading Change: The $1 Exercise',
  paragraphs: [
    'Walking into class last week, I was oblivious to the challenge that awaited. A simple exercise of persuading classmates to line up against the wall turned into a profound lesson in leadership, trust, and navigating organizational complexities.',
    'As one of the randomly selected "managers," the task seemed straightforward until it was evident that our "employees" had been given conflicting instructions. This information asymmetry created an unexpected obstacle, simulating real-world organizational challenges.',
    'The dilemma was whether to disclose the truth about our task or to devise an alternate strategy. Opting for honesty, we faced resistance, debate, and ultimately, a test of our ability to unite and lead under uncertain conditions.',
    'This experience underscored the criticality of communication and trust-building in leadership. Despite the straightforward nature of the task, the underlying dynamics revealed the complexity of managing change and aligning a team with diverse motivations.',
    'By confronting these challenges head-on and adhering to our principles, we succeeded. The exercise served as a vivid reminder of the moral quandaries and political minefields that leaders navigate daily. Embracing these challenges and learning from them is crucial for continuous improvement and progress in leadership.',
  ],
};

const SecondClass = () => (
  <BlogPost
    title={SecondClassContent.title}
    paragraphs={SecondClassContent.paragraphs}
  />
);

export default SecondClass;
