import * as React from 'react';
// import { Typeahead } from 'react-bootstrap-typeahead';
import './imageList.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ImageItem from '../imageItem/imageItem';

export interface Props {
    images: any[];
    tags: any[];
}

class ImageList extends React.Component<Props, object> {
    render() {
        return (
            <div className="imagelist">
                    {this.props.images.map(image =>
                    <div
                        key={image.src}
                        className="imagelist__item"
                    >
                        <ImageItem image={image} tags={this.props.tags}/>
                    </div>)}
            </div>
        );
    }
}

export default ImageList;
