import Section from "types/Section";
import SectionActionTypes from "store/actions/sectionActions";

// State Type
export default interface SectionState {
    all: Section[]
}

// Actions Types
export interface AddSectionAction {
    type: SectionActionTypes.ADD_SECTION,
    payload: {
        section: Section
    }
}

export interface DeleteSectionAction {
    type: SectionActionTypes.DELETE_SECTION,
    payload: {
        title: Section["title"]
    }
}

export type SectionAction = AddSectionAction | DeleteSectionAction
