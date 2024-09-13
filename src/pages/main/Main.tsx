
import MainBottomCard from "../../components/Main/MainBottomCard";
import MainHeader from "../../components/Main/MainHeader";
import MainHighlightsVideo from "../../components/Main/MainHighlightsVideo";
import MainPageGameSchedule from "../../components/main/MainPageGameSchedule";
import Slide from '../../components/Slide';

const Main = () => {
    return (
        <>
            <MainHeader />
            <MainPageGameSchedule />
            <MainHighlightsVideo />
            <Slide />
            <MainBottomCard/>
            
        </>
    );
};
export default Main;
