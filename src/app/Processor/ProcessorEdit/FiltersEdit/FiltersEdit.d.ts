import { EventFilter } from "../../../../types/Processor";
interface FiltersEditProps {
    filters: EventFilter[];
    onChange: (filters: EventFilter[]) => void;
}
declare const FiltersEdit: (props: FiltersEditProps) => JSX.Element;
export default FiltersEdit;
