import * as React from 'react';
import './imageItem.css';
import { Typeahead } from 'react-bootstrap-typeahead';

export interface Props {
    image: any;
    tags: any[];
}
export interface State {
    showStaticTags: boolean;
    showDynamicTags: boolean;
}
class ImageItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showStaticTags: false,
            showDynamicTags: true
        };
    }

    changed(items: string[]) {
        console.log('changed', items);
        // TODO: do the comparison with the previous array, send new tag to the API
    }
    render() {
        return (
            <div className="image-item">
                <img
                    className="image-item__image"
                    src={this.props.image.src + '&sz=w240'}
                />
                {this.state.showStaticTags ?
                    <div className="image-item__tags">
                        {
                            this.props.image.tags.map((tag: any) =>
                            <span className="image-item__tag label label-info" key={tag}>{tag}</span>
                        )}
                    </div> : ''
                }
                <div className="image-item__typeahead">
                    <Typeahead
                        options={this.props.tags}
                        multiple={true}
                        align="left"
                        allowNew={true}
                        onChange={this.changed}
                        defaultSelected={this.props.image.tags}
                        placeholder="Add tag"
                    />
                </div>
            </div>
        );
    }
}
export default ImageItem;