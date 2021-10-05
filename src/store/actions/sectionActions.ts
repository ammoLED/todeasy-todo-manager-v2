import Section from "types/Section"
import { AddSectionAction, DeleteSectionAction } from "store/types/SectionStore"

enum SectionActionTypes {
    ADD_SECTION    = 'ADD_SECTION',
    DELETE_SECTION = 'DELETE_SECTION',
    // UPDATE_SECTION = 'UPDATE_SECTION'
}
export default SectionActionTypes

export const addSection = (section: Section): AddSectionAction => ({
    type: SectionActionTypes.ADD_SECTION,
    payload: {
        section
    }
})


export const deleteSection = (title: Section["title"]): DeleteSectionAction => ({
    type: SectionActionTypes.DELETE_SECTION,
    payload: {
        title
    }
})