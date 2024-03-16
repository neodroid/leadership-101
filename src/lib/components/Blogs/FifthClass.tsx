'use client';

import BlogPost from './BlogPost'; // Adjust the import path as necessary

const FifthClassContent = {
  title: 'A Lesson in Decision-Making and Influence',
  paragraphs: [
    "In our fifth leadership class, we dove into the intriguing world of decision-making, power, and influence through an engaging exercise that simulated being stranded in Alaska following a plane crash. Tasked with ranking various survival items individually, we then had to collaborate as a group to agree on a collective ranking. This exercise wasn't just about survival; it was a deep dive into the dynamics of group decision-making and the roles of influence and hierarchy within a team.",
    "The initial part of the exercise required us to think critically and prioritize items based on their importance for survival. The twist came when we had to merge our individual decisions into a group consensus. This phase tested our negotiation skills, patience, and the ability to influence or be influenced by others. It was fascinating to see how different people's perspectives were and how a group dynamic could shift individual priorities.",
    'After reaching a group decision, we compared our rankings with those of survival experts. This comparison not only showed how close or far our judgments were from those with expertise but also served as a unique measure of influence within our group. We calculated who among us had their choices most frequently aligned with the group’s final decision, revealing the most influential members. This process shed light on the subtleties of influence—how it operates in groups and how it can be both overt and nuanced.',
    "The class also highlighted the importance of social capital and networks in leadership. Through the lens of historical examples, we examined how figures like Paul Revere leveraged their networks to enact change and spread information effectively. This discussion underscored the power of well-structured networks and the role of social capital in amplifying one's influence. Understanding the dynamics of our social networks, and how to navigate them, was presented as a critical skill for leaders aiming to maximize their impact within and beyond their organizations.",
  ],
};

const FifthClass = () => (
  <BlogPost
    title={FifthClassContent.title}
    paragraphs={FifthClassContent.paragraphs}
  />
);

export default FifthClass;
