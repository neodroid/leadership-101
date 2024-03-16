'use client';

import BlogPost from './BlogPost'; // Adjust the import path as necessary

const IntroClassContent = {
  title: 'Unexpected Lessons in Leadership',
  paragraphs: [
    'When I see I enrolled in this class, I didn’t know what to expect. I figured it would cover the usual topics like goal-setting, delegation, and team-building. But after the first session, I realized this class was going to challenge my assumptions and provoke deeper introspection.',
    'The class started with a seemingly innocuous document listing various potential pitfalls at the individual, group, and systemic levels. At first glance, I thought, "Yeah, yeah, I know all this stuff." But as we unpacked each item, I realized how insidious and pervasive these challenges could be.',
    'At the individual level, the class highlighted the dangers of overconfidence, escalating commitment to failing plans, and neglecting contingencies. As an ambitious go-getter, I’ve definitely been guilty of these tendencies in the past. It was a wake-up call to temper my confidence with humility and pragmatism.',
    'But it was the group and systemic pitfalls that really caught me off guard. Things like hierarchical structures hindering communication, lack of trust and cohesiveness, and systemic dependencies – these were issues I had never fully appreciated. I had always focused on my own leadership style and abilities, but this class made me realize that even the best individual leader can be undermined by group dynamics and external factors.',
    'As we discussed real-world examples of teams and organizations derailed by these pitfalls, I found myself nodding along in recognition. It was like someone had finally articulated the elephants in the room that so often go unaddressed.',
    'Leaving that first class, I felt a mix of unease and excitement. Unease because I realized how much I still had to learn, and excitement because this class was clearly going to challenge me in unexpected ways. For once, I didn’t feel like I had all the answers. And that’s precisely what I need to become a better, more well-rounded leader.',
  ],
};

const IntroClass = () => (
  <BlogPost
    title={IntroClassContent.title}
    paragraphs={IntroClassContent.paragraphs}
  />
);

export default IntroClass;
