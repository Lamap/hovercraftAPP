import * as React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

export interface Props {
    image: any;
    tags: any[];
}

class ImageItem extends React.Component<Props, object> {
    changed(items: string[]) {
        console.log('changed', items);
    }
    render() {
        return (
            <div>
                <img
                    className="image-item"
                    src={this.props.image.src + '&sz=w250'}
                />
                <div className="image-item__tags">
                    {this.props.image.tags.map((tag: any) =>
                        <span className="image-item__tag label label-info" key={tag}>{tag}</span>)}
                </div>
                <div className="image-item__typeahead">
                    <Typeahead
                        options={this.props.tags}
                        multiple={true}
                        align="left"
                        allowNew={true}
                        submitFormOnEnter={true}
                        onChange={this.changed}
                        defaultSelected={this.props.image.tags}
                    />
                </div>
            </div>
        );
    }
}
export default ImageItem;