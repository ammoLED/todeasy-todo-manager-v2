import Section from "types/Section"

enum SectionActionTypes {
    ADD_SECTION    = 'ADD_SECTION',
    DELETE_SECTION = 'DELETE_SECTION',
    // UPDATE_SECTION = 'UPDATE_SECTION'
}
export default SectionActionTypes

export const addSection = (section: Section): any => ({
    type: SectionActionTypes.ADD_SECTION,
    payload: {
        section
    }
})


export const deleteSection = (title: Section["title"]): any => ({
    type: SectionActionTypes.DELETE_SECTION,
    payload: {
        title
    }
})