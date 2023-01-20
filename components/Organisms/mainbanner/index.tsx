import Feature from "./Feature";
import FeaturedGame from "./featured-game/Index";
import Header from "./header/Index";
import Reached from "./reached";
import Story from "./Story";

type Props = {

};
export default function MainBanner() {
    return (
        <>
            {/* // <!-- Header --> */}
            < Header />

            {/* <!-- 3 Column - Feature --> */}
            < Feature />

            {/* <!-- 5 Column - Featured-game --> */}
            < FeaturedGame />

            {/* <!-- Reached --> */}
            < Reached />

            {/* <!-- Story --> */}
            < Story />
        </>

    );
};