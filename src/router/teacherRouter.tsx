import { createBrowserRouter } from "react-router-dom";
import TeacherDashboard from "../pagesForTeachers/TeacherDashboard";
import LoadingScreen from "../components/static/LoadingScreen";
import TeacherLayout from "../pagesForTeachers/components/layout/TeacherLayout";
import Schedule from "../pagesForTeachers/pages/schedule/Schedule";
import MyClass from "../pagesForTeachers/pages/class/MyClass";
import Subjects from "../pagesForTeachers/pages/subject/Subjects";
import LessonNote from "../pagesForTeachers/pages/lessonNote/LessonNote";
import WeekReport from "../pagesForTeachers/pages/report/WeekReport";
import ViewStoreItems from "../pagesForTeachers/pages/store/ViewStoreItems";
import StudentDetail from "../pagesForTeachers/pages/class/StudentDetail";
import QuizSetupScreen from "../pagesForTeachers/pages/quiz/QuizSetupScreen";
import QuizTestScreen from "../pagesForTeachers/pages/quiz/QuizTestScreen";
import CreateQuiz from "../pagesForTeachers/pages/quiz/CreateQuiz";
import CreateLesson from "../pagesForTeachers/pages/lessonNote/CreateLessonNote";
import AttendanceScreen from "../pagesForTeachers/pages/attendance/AttendanceScreen";
import ViewTeacherNote from "../pagesForTeachers/pages/lessonNote/ViewTeacherNote";
import Article from "../pagesForTeachers/pages/article/Article";
import GallerySettings from "../pages/page/settings/GallerySettings";
import GalleryScreen from "../pagesForTeachers/pages/gallary/GallaryScreen";
import ViewReport from "../pagesForTeachers/pages/complain/ViewReport";

export const teacherRouter = createBrowserRouter([
  {
    path: "/",
    element: <TeacherLayout />,
    children: [
      {
        index: true,
        element: <TeacherDashboard />,
      },
      {
        index: true,
        path: "complain",
        element: <ViewReport />,
      },
      {
        path: "/dashboard",
        index: true,
        element: <TeacherDashboard />,
      },
      {
        path: "my-schedule",
        element: <Schedule />,
      },
      {
        path: "my-class",
        element: <MyClass />,
      },
      {
        path: "my-class/student-details/:studentID",
        element: <StudentDetail />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "subjects/:subjectID",
        element: <QuizSetupScreen />,
      },
      {
        path: "attendance",
        element: <AttendanceScreen />,
      },
      {
        path: "quiz/details/:quizID",
        element: <QuizTestScreen />,
      },

      {
        path: "create-quiz/:subjectID",
        element: <CreateQuiz />,
      },

      {
        path: "lesson-note",
        element: <LessonNote />,
      },
      {
        path: "view-articles/:view",
        element: <Article />,
      },

      {
        path: "view-articles",
        element: <Article />,
      },
      {
        path: "lesson-note/:noteID",
        element: <ViewTeacherNote />,
      },

      {
        path: "create-notes",
        element: <CreateLesson />,
      },

      {
        path: "store",
        element: <ViewStoreItems />,
      },

      {
        path: "exams",
        element: <QuizSetupScreen />,
      },

      {
        path: "Gallary",
        element: <GalleryScreen />,
      },

      {
        path: "week-report",
        element: <WeekReport />,
      },
    ],
  },
  {
    path: "*",
    element: <LoadingScreen />,
  },
]);
