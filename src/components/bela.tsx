import * as React from 'react';
import './bela.css';

export interface Props {
    name: string;
}

class Bela extends React.Component<Props, object> {
    render() {

        return (
            <div className="bela">
                <div className="bela__greeting">
                    I am {this.props.name}
                </div>
            </div>
        );
    }
}

export default Bela;
