import Feature from "./feature-step";
import Header from "./header/Index";
import Reached from "./reached/index"
import FeaturedGame from "./featured-game/Index";
import Story from "./Story";

type Props = {

};
export default function LandingPage() {
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
