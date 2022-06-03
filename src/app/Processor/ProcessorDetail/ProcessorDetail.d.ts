import { Processor } from "../../../types/Processor";
import "./ProcessorDetail.css";
interface ProcessorDetailProps {
    /**
     * The processor to display
     */
    processor: Processor;
}
declare const ProcessorDetail: (props: ProcessorDetailProps) => JSX.Element;
export default ProcessorDetail;
