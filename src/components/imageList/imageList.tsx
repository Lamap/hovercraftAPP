import * as React from 'react';
// import { Typeahead } from 'react-bootstrap-typeahead';
import './imageList.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ImageItem from '../imageItem/imageItem';

export interface Props {
    images: any[];
    tags: any[];
}
export interface State {
    colCount: number;
}

class ImageList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            colCount: 5
        };
    }
    getCols() {
        let cols: any[] = [];

        for (let colIndex = 0; colIndex < this.state.colCount; colIndex++) {
            cols[colIndex] = this.props.images.filter((image, imageIndex) => {
                return imageIndex % this.state.colCount === colIndex;
            });
        }

        return cols;
    }
    render() {
        const cols = this.getCols();
        return (
            <div className={'imagelist imagelist--divided-' + this.state.colCount}>
                {
                    cols.map((col, colIndex) =>
                        <div key={colIndex} className="imagelist__col">
                            {col.map(
                                (image: any, imageIndex: number) => <ImageItem
                                    key={imageIndex}
                                    image={image}
                                    tags={this.props.tags}
                                />
                            )}
                        </div>)
                }
            </div>
        );
    }
}

export default ImageList;
