# Discovery Interview Guide

This document defines how Claude conducts a structured discovery interview to surface achievements, metrics, and experiences that aren't captured in your CV or online presence.

## Why This Matters

Most people undersell themselves. Your CV lists responsibilities, but interviewers and hiring managers want **impact**. The discovery interview helps uncover:

- Metrics you forgot you had ("We reduced churn by 30%" vs "I worked on retention")
- Achievements you take for granted ("I just fixed the deployment process" → saved 5 hours/week for a team of 8)
- Leadership moments that aren't in your job title (mentoring, hiring, cross-team initiatives)
- Business context that makes your work more impressive (company size, funding stage, constraints)

## When to Use

- **During initial setup** — after gathering public sources, before generating CVs
- **When achievements.md has gaps** — missing metrics, vague descriptions, thin sections
- **Before a specific application** — to surface relevant experience for a target role
- **Anytime** — the user can ask to be interviewed at any point

## Interview Framework

### Ground Rules for Claude

1. **Be conversational, not interrogative.** This should feel like a chat with a helpful colleague, not a job interview.
2. **One topic at a time.** Don't overwhelm with multiple questions. Follow the thread.
3. **Celebrate what you find.** When someone reveals something impressive, acknowledge it: "That's a strong achievement — hiring managers love seeing concrete numbers like that."
4. **Explain why you're asking.** "I'm asking about team size because it helps frame the scale of your leadership experience."
5. **Offer examples of good answers.** "For instance, did you save the company money, speed something up, grow a metric, or prevent a problem?"
6. **Don't push.** If someone doesn't know a number, help them estimate or move on. "Even a rough estimate works — was it closer to 10 or 100?"
7. **Summarise as you go.** After each topic, reflect back what you've learned so the user can correct it.
8. **Update achievements.md in real time.** Don't wait until the end — add discoveries as they come up.

### Interview Structure

#### Phase 1: Career Overview (5 mins)
Quick context-setting. Much of this may already be in AGENTS.md.

- "Walk me through your career in a couple of sentences — where you started, where you are now."
- "What are you most proud of professionally?"
- "What do people come to you for? What's your reputation?"

#### Phase 2: Role Deep-Dives (10-15 mins per role)
Go through each significant role, starting with the most recent.

**Opening:**
- "Tell me about your time at [Company]. What was the company doing when you joined?"
- "What was your role when you started vs when you left?"

**Impact & Scale:**
- "How big was your team? Did that change while you were there?"
- "What was the budget you managed, if any?"
- "How many users/customers did your work affect?"
- "What was the company's revenue or funding stage?"

**Achievements:**
- "What's the thing you did there that you're most proud of?"
- "Did you build anything from scratch? Migrate anything? Fix something that was broken?"
- "Were there any moments where you saved the day — a crisis, a deadline, a major bug?"
- "Did you hire anyone? How many? What was the team like before vs after?"

**Metrics Extraction:**
For each achievement, probe for numbers:
- "Do you remember roughly how much faster/cheaper/better it got?"
- "How many people did this affect?"
- "What was the before and after?"
- "Was there a dollar figure attached — cost savings, revenue, deal size?"
- "Even a rough percentage or order of magnitude helps."

**Leadership & Influence:**
- "Did you mentor anyone who went on to do well?"
- "Were you involved in any hiring decisions?"
- "Did you present to leadership, clients, or at events?"
- "Did you introduce any new processes or tools that stuck?"

#### Phase 3: Hidden Achievements (5-10 mins)
These are the ones people forget or dismiss.

- "Have you done any volunteering, open source, or community work?"
- "Have you spoken at any events, meetups, or conferences?"
- "Have you written anything — blog posts, internal docs, guides?"
- "Have you received any awards, nominations, or public recognition?"
- "Have you been quoted in any press or media?"
- "Are there any side projects or personal projects you're proud of?"
- "Have you ever been asked to do something outside your normal role — like advise another team, join a special project, or represent the company?"

#### Phase 4: Skills & Tools (5 mins)
Quick inventory to catch anything missing.

- "What tools or technologies do you use daily?"
- "What are you learning right now?"
- "Is there anything you're particularly good at that wouldn't show up on your CV?"
- "Any certifications, courses, or training worth mentioning?"

#### Phase 5: Target Role Alignment (5 mins)
Tailor the conversation to their target roles.

- "For the [Target Role] positions — is there anything from your experience we haven't covered that's relevant?"
- "Are there any gaps you're worried about for these roles?"
- "What would make you the obvious choice for this kind of role?"

### After the Interview

1. **Summarise findings.** Present a clear list of new achievements and metrics discovered.
2. **Show what changed.** "I've added 8 new achievements to your database. Here are the highlights..."
3. **Highlight the strongest new material.** "These three are particularly strong for your target roles..."
4. **Flag remaining gaps.** "I still don't have numbers for [X] — if you can dig those up later, they'd strengthen your CV."
5. **Update achievements.md and skills.md** with everything discovered.
6. **Update AGENTS.md** with new verified facts.

## Conversation Starters

Users can trigger an interview at any time with prompts like:
- "Interview me about my experience"
- "Help me dig into my achievements"
- "I want to add more detail to my CV"
- "Ask me questions about my career"
- "Let's do a discovery session"

## Tips for Getting Good Answers

**When someone says "I don't know the exact number":**
- "Was it closer to X or Y?" (give a range)
- "Roughly — are we talking tens, hundreds, or thousands?"
- "What's the smallest number you're confident about?"

**When someone is modest:**
- "If your manager were describing this to their boss, how would they frame it?"
- "What would a colleague say was your biggest contribution?"
- "Imagine you're recommending yourself — what would you highlight?"

**When answers are vague ("I improved the process"):**
- "What was the process before you changed it?"
- "What specifically did you do?"
- "How did people react? Did anyone thank you for it?"
- "Is there a before/after comparison you could make?"

**When someone says "that was a team effort":**
- "Absolutely — and what was your specific role in that team effort?"
- "What part wouldn't have happened without you?"
- "Did you lead, coordinate, or contribute a specific piece?"
