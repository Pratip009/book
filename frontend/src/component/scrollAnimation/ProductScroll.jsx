import { Parallax, Background } from 'react-parallax';

const Container = () => (
    <Parallax strength={300}>
        <Background className="custom-bg">
            <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
        </Background>
    </Parallax>
);