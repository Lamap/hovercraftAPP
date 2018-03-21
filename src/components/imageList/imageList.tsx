import * as React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import './imageList.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export interface Props {
    images: any[];
    tags: any[];
}

class ImageList extends React.Component<Props, object> {
    changed(items: string[]) {
        console.log('changed', items);
    }
    render() {
        return (
            <div className="imagelist">
                    {this.props.images.map(image =>
                    <div
                        key={image.src}
                        className="imagelist__item"
                    >
                        <img
                            className="imagelist__image-item"
                            src={image.src + '&sz=w250'}
                        />
                        <div className="imagelist__image-tags">
                            {image.tags.map((tag: any) =>
                                <span className="imagelist__image-tagitem label label-info" key={tag}>{tag}</span>)}
                        </div>
                        <div className="imagelist__typeahead">
                            <Typeahead
                                options={this.props.tags}
                                multiple={true}
                                align="left"
                                allowNew={true}
                                submitFormOnEnter={true}
                                onChange={this.changed}
                                defaultSelected={image.tags}
                            />
                        </div>
                    </div>)}
            </div>
        );
    }
}

export default ImageList;
