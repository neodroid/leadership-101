'use client';

import BlogPost from './BlogPost'; // Adjust the import path as necessary

const LastClassContent = {
  title: 'Wrapping Up the Leadership Series',
  paragraphs: [
    "For the last class, which I couldn't attend, the materials showed that it was all about solving a murder mystery called 'Who Killed Robert Guion?' Everyone first worked alone to figure out who the culprit was, and then in groups, they had to agree on the suspect. This activity was a cool way to see how important it is to share information when making decisions in a group. It also looked at why people tend to team up with others who are similar to them, whether it's because they're physically close or have things in common.",
    'The class talked about the good and bad sides of groups where everyone is alike (homogeneous) versus groups with lots of different people (heterogeneous). Groups with similar people can get along easily but might not come up with many new ideas. On the other hand, diverse groups can have more creative and innovative ideas, even though it might be harder for them to start working well together.',
    "What stood out was learning that over time, the difference in performance between groups that are all the same and groups that are diverse gets smaller. This means that even if it's a bit harder at the start, having a mix of different people can lead to better results in the end. The last class really seemed to bring together everything the course covered about leadership, how to make decisions as a group, and why it's valuable to work with people who might not think or act just like you do.",
    "Even though I missed the final class, going through the materials made me realize how much I've enjoyed and learned from this leadership class series. Each session, including the last one with its intriguing murder mystery, was packed with valuable lessons on teamwork, decision-making, and the importance of diversity. The interactive exercises, combined with insightful discussions, have given me a new perspective on leadership and how to effectively work with others. This series has been an incredible journey, enriching my understanding of what it means to lead and collaborate within diverse teams. I feel grateful for the experience and excited to apply these lessons in real-world scenarios.",
  ],
};

const LastClass = () => (
  <BlogPost
    title={LastClassContent.title}
    paragraphs={LastClassContent.paragraphs}
  />
);

export default LastClass;
