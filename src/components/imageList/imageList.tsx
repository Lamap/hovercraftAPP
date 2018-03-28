import * as React from 'react';
import './imageList.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import ImageItem from '../imageItem/imageItem';
import { Typeahead } from 'react-bootstrap-typeahead';

export interface Props {
    images: any[];
    tags: any[];
}
export interface State {
    colCount: number;
    selectedTags: string[];
}

class ImageList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            colCount: 5,
            selectedTags: []
        };
        this.filterTagsChanged = this.filterTagsChanged.bind(this);
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

    filterTagsChanged(updatedList: string[]) {
        this.setState({selectedTags: updatedList});
    }

    render() {
        const cols = this.getCols();
        return (
            <div className={'imagelist imagelist--divided-' + this.state.colCount}>
                <div className="imagelist__header">
                    <div className="imagelist__filter-container">
                        <Typeahead
                            options={this.props.tags}
                            multiple={true}
                            align="left"
                            onChange={this.filterTagsChanged}
                            placeholder="Write tags to filter"
                        />
                    </div>
                </div>
                <div className="imagelist__body">
                {
                    cols.map((col, colIndex) =>
                        <div key={colIndex} className="imagelist__col">
                            {col.map(
                                (image: any, imageIndex: number) => <ImageItem
                                    key={imageIndex}
                                    image={image}
                                    avalaibleTags={this.props.tags}
                                />
                            )}
                        </div>)
                }
                </div>
            </div>
        );
    }
}

export default ImageList;
