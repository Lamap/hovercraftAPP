import * as React from 'react';

export interface Props {
    avalaibleTags: string[];
    selectedTags: string[];
}

class TagControl extends React.Component<Props, object> {
    handleSubmit(event: any) {
        event.preventDefault();
        console.log('add new tag', event.target);
        return false;
    }
    render() {
        return (
            <div className="tag-controller">
                <form onSubmit={this.handleSubmit}>
                    <input className="tag-controller-input" placeholder="write a tag" name="newtag"/>
                    <button type="submit" className={'btn btn-primary'}>Add tag</button>
                </form>
            </div>
        );
    }
}

export default TagControl;
