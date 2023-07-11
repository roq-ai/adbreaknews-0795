import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  user_id?: string;
  team_lead_id?: string;
  created_at?: any;
  updated_at?: any;

  user_feedback_user_idTouser?: UserInterface;
  user_feedback_team_lead_idTouser?: UserInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  team_lead_id?: string;
}
