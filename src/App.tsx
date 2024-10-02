interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartSpecial extends CoursePartDescription {
  requirements: string[];
  kind: "special"
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

const Part = ({coursePart}: {coursePart: CoursePart}): JSX.Element => {
  switch (coursePart.kind) {
    case "basic":
      return <p>{coursePart.description}</p>
    case "group":
      return <p>project exercises {coursePart.groupProjectCount}</p>
    case "background":
      return (
        <div>
          <p>{coursePart.description}</p> 
          <p>submit to {coursePart.backgroundMaterial}</p>
        </div>
      )
    case "special":
      return (
        <div>
          <p>{coursePart.description}</p>
          <p>required skills: {coursePart.requirements.toString()}</p>
        </div>
      )
    default:
      return <></>;
  };
};

const Header = ({name}: {name: string}): JSX.Element => (
  <h1>{name}</h1>
);

const Content = ({coursePart}: {coursePart: CoursePart[]}): JSX.Element => (
    <div>
      {coursePart.map(course => (
        <div>
          <b>{course.name} {course.exerciseCount}</b>
          <Part coursePart={course}/>
        </div>
      ))}
    </div>
);

const Total = ({total}: {total: number}): JSX.Element => (
  <p>Number of exercises {total}</p>
);

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName}/>
      <Content coursePart={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;