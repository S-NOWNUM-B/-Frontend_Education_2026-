import React from "react";
import UserCard from "./components/UserCard";
import SkillList from "./components/SkillList";

import type { User, Skill } from "./types";

const App: React.FC = () => {
  const testUser: User = {
    name: "Алексей Иванов",
    email: "alexey.ivanov@example.com",
    age: 30,
  };

  const testSkills: Skill[] = [
    { id: 1, name: "JavaScript", level: "Advanced" },
    { id: 2, name: "React", level: "Intermediate" },
    { id: 3, name: "TypeScript", level: "Beginner" },
  ];

  return (
    <div>
      <h1>Lab_5.1</h1>
      <UserCard user={testUser} isActive={false}>
        <div>
          <h3>Мои профессиональные навыки</h3>
          <SkillList skills={testSkills} />
        </div>
      </UserCard>
      <UserCard user={{ name: "Мария Петрова", email: "maria.petrova@example.com", age: 25 }} isActive={false}>
        <p>Этот пользователь сейчас не активен</p>
      </UserCard>
    </div>
  );
};

export default App;