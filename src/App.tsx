interface CourseParts {
  name: string,
  exerciseCount: number,
};

const Header = ({name}: {name: string}): JSX.Element => (
  <h1>{name}</h1>
);

const Content = ({courseParts}: {courseParts: CourseParts[]}): JSX.Element => (
    <div>
      {courseParts.map(course => (
        <p>{course.name} {course.exerciseCount}</p>
      ))}
    </div>
);

const Total = ({total}: {total: number}): JSX.Element => (
  <p>Number of exercises {total}</p>
);

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName}/>
      <Content courseParts={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;