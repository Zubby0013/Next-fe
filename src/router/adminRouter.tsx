import { createBrowserRouter } from "react-router-dom";
import PersonalSetting from "../pages/page/settings/PersonalSetting";
import PersonalInfoScreen from "../pages/page/settings/PersonalInfoScreen";
import ViewStoreItems from "../pages/page/store/ViewStoreItems";
import SettingScreen from "../pages/page/settings/Setting";
import StudentDetail from "../pages/page/student/StudentDetail";
import StaffDetail from "../pages/page/staff/StaffDetail";
import ViewStaffScreen from "../pages/page/staff/ViewStaffScreen";
import ViewStudent from "../pages/page/student/ViewStudent";
import ViewReport from "../pages/page/report/ViewReport";
import HomeView from "../pages/home/HomeView";
import HomeScreen from "../pages/home/HomeScreen";
import Layout from "../components/layout/Layout";
import MakeShift from "./MakeShift";
import PrivateRouter from "./PrivateRouter";
import { ErrorBoundary } from "react-error-boundary";
import LoadingScreen from "../components/static/LoadingScreen";
import ThirdScreen from "../pages/home/start/ThirdStep";
import SecondStep from "../pages/home/start/SecondStep";
import ClassRoomScreen from "../pages/page/class/ClassRoomScreen";
import ClassDetailScreen from "../pages/page/class/ClassDetailScreen";
import ViewSubjects from "../pages/page/subject/ViewSubject";
import AdminLessonNote from "../pages/page/less/LessonNote";
import ViewTeacherNoteByAdmin from "../pages/page/less/ViewTeacherNote";
import ViewSchoolSettings from "../pages/page/settings/ViewSchoolSettings";
import SchoolTheme from "../pages/page/settings/SchoolTheme";
import GallerySettings from "../pages/page/settings/GallerySettings";
import GallaryScreen from "../pages/page/gallary/GallaryScreen";
import ThemeScreen from "../pages/page/settings/ThemeScreen";
import TestGallary from "../pages/page/gallary/TestGallary";
import SchoolPage from "../mainPage/SchoolPage";
import MainSchoolPage from "../mainPage/MainSchoolPage";
import SchoolHome from "../mainPage/SchoolHome";

export const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<LoadingScreen />}>
        <PrivateRouter>
          <MakeShift />
        </PrivateRouter>
      </ErrorBoundary>
    ),
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <HomeScreen />,
            children: [
              {
                index: true,
                element: <HomeView />,
              },
              {
                index: true,
                path: "dashboard",
                element: <HomeView />,
              },
            ],
          },

          {
            index: true,
            path: "test",
            element: <TestGallary />,
          },

          {
            index: true,
            path: "lesson-note",
            element: <AdminLessonNote />,
          },

          {
            index: true,
            path: "/lesson-note/:noteID",
            element: <ViewTeacherNoteByAdmin />,
          },

          {
            index: true,
            path: "subjects",
            element: <ViewSubjects />,
          },

          {
            index: true,
            path: "report",
            element: <ViewReport />,
          },
          {
            index: true,
            path: "view-students",
            element: <ViewStudent />,
          },
          {
            index: true,
            path: "view-staff",
            element: <ViewStaffScreen />,
          },
          {
            index: true,
            path: "class-room",
            element: <ClassRoomScreen />,
          },
          {
            index: true,
            path: "class-room/class-details/:classID",
            element: <ClassDetailScreen />,
          },
          {
            index: true,
            path: "view-staff/staff-details/:staffID",
            element: <StaffDetail />,
          },
          {
            index: true,
            path: "view-students/student-details/:studentID",
            element: <StudentDetail />,
          },

          {
            index: true,
            path: "settings",
            element: <SettingScreen />,
          },

          {
            index: true,
            path: "store",
            element: <ViewStoreItems />,
          },

          {
            index: true,
            path: "gallary",
            element: <GallaryScreen />,
          },

          {
            path: "my-personal-info",
            element: <PersonalSetting />,
            children: [
              {
                index: true,
                path: "info",
                element: <PersonalInfoScreen />,
              },

              {
                index: true,
                path: "theme-settings",
                element: <SchoolTheme />,
              },
              {
                index: true,
                path: "theme-setting",
                element: <ThemeScreen />,
              },
            ],
          },

          {
            path: "school-info",
            element: <ViewSchoolSettings />,
            children: [
              {
                index: true,
                path: "view-school-settings",
                element: <ViewSchoolSettings />,
              },
            ],
          },

          {
            index: true,
            path: "view-gallery",
            element: <GallerySettings />,
          },
        ],
      },
    ],
  },

  {
    path: "/step-two-data",
    element: <ThirdScreen />,
  },

  {
    path: "/step-third-data",
    element: <SecondStep />,
  },

  {
    path: "*",
    element: <LoadingScreen />,
  },
]);
