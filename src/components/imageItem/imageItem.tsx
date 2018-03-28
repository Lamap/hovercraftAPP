import * as React from 'react';
import './imageItem.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

export interface Props {
    image: any;
    avalaibleTags: any[];
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
        this.tagsUpdated = this.tagsUpdated.bind(this);
    }

    tagsUpdated(items: any[]) {
        let newTag: string;
        let newItems = items.filter((item) => {
            return this.props.image.tags.indexOf(item) === -1;
        });
        if (newItems.length) {
            const newOne: any = newItems.pop();
            newTag = typeof newOne === 'string' ? newOne : newOne.label;
            console.log(newTag);
        }
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
                    </div> : null
                }
                <div className="image-item__typeahead">
                    <Typeahead
                        options={this.props.avalaibleTags}
                        multiple={true}
                        align="left"
                        allowNew={true}
                        onChange={this.tagsUpdated}
                        defaultSelected={this.props.image.tags}
                        placeholder="Add tag"
                    />
                </div>
            </div>
        );
    }
}
export default ImageItem;