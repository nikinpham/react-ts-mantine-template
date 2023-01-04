import { APIs } from '@/config/httpConfig/apis';
import { http } from '@/helper/http';
import { IDevice } from '@/interfaces/interfaceTLSCommunications';
import { from } from 'rxjs';

// const setUriEvent = (id: string, page?: number) =>
//   APIs.GET_EVENT_BY_ID + id + '?page=' + (page || 1);

export const getListDevices = () => from(http.get<IDevice[]>(APIs.GET_NODE_LIST));
// export const getEventById = (id: string, page?: number) =>
//   from(http.get<IListEventPage>(setUriEvent(id, page)));
