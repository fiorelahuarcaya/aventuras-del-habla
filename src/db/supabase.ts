export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      APPOINTMENT: {
        Row: {
          created_at: string;
          date: string;
          id_appointment: string;
          id_child: string;
          id_specialist: string;
          subject: string | null;
        };
        Insert: {
          created_at?: string;
          date: string;
          id_appointment?: string;
          id_child: string;
          id_specialist: string;
          subject?: string | null;
        };
        Update: {
          created_at?: string;
          date?: string;
          id_appointment?: string;
          id_child?: string;
          id_specialist?: string;
          subject?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_APPOINTMENT_id_child_fkey";
            columns: ["id_child"];
            isOneToOne: false;
            referencedRelation: "CHILD";
            referencedColumns: ["id_child"];
          },
          {
            foreignKeyName: "public_APPOINTMENT_id_specialist_fkey";
            columns: ["id_specialist"];
            isOneToOne: false;
            referencedRelation: "SPECIALIST";
            referencedColumns: ["id_specialist"];
          }
        ];
      };
      CHILD: {
        Row: {
          avatar_url: string | null;
          birthdate: string;
          first_name: string;
          gender: string;
          id_child: string;
          id_parent: string;
          id_specialist: string | null;
          last_name: string;
        };
        Insert: {
          avatar_url?: string | null;
          birthdate: string;
          first_name: string;
          gender: string;
          id_child?: string;
          id_parent: string;
          id_specialist?: string | null;
          last_name: string;
        };
        Update: {
          avatar_url?: string | null;
          birthdate?: string;
          first_name?: string;
          gender?: string;
          id_child?: string;
          id_parent?: string;
          id_specialist?: string | null;
          last_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_CHILD_id_parent_fkey";
            columns: ["id_parent"];
            isOneToOne: false;
            referencedRelation: "PARENT";
            referencedColumns: ["id_parent"];
          },
          {
            foreignKeyName: "public_CHILD_id_specialist_fkey";
            columns: ["id_specialist"];
            isOneToOne: false;
            referencedRelation: "SPECIALIST";
            referencedColumns: ["id_specialist"];
          }
        ];
      };
      EVALUATION: {
        Row: {
          created_at: string;
          evaluated_at: string | null;
          finished_at: string | null;
          id_child: string;
          id_evaluation: string;
          id_practice: string;
          observation: string | null;
        };
        Insert: {
          created_at?: string;
          evaluated_at?: string | null;
          finished_at?: string | null;
          id_child: string;
          id_evaluation?: string;
          id_practice: string;
          observation?: string | null;
        };
        Update: {
          created_at?: string;
          evaluated_at?: string | null;
          finished_at?: string | null;
          id_child?: string;
          id_evaluation?: string;
          id_practice?: string;
          observation?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_EVALUATION_id_child_fkey";
            columns: ["id_child"];
            isOneToOne: false;
            referencedRelation: "CHILD";
            referencedColumns: ["id_child"];
          },
          {
            foreignKeyName: "public_EVALUATION_id_practice_fkey";
            columns: ["id_practice"];
            isOneToOne: false;
            referencedRelation: "PRACTICE";
            referencedColumns: ["id_practice"];
          }
        ];
      };
      EVALUATION_EXERCISE: {
        Row: {
          id_detail: string;
          id_evaluation: string;
          id_exercise: string;
          score: number;
          transcription: string;
        };
        Insert: {
          id_detail?: string;
          id_evaluation: string;
          id_exercise: string;
          score: number;
          transcription: string;
        };
        Update: {
          id_detail?: string;
          id_evaluation?: string;
          id_exercise?: string;
          score?: number;
          transcription?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_EVALUATION_EXERCISE_id_evaluation_fkey";
            columns: ["id_evaluation"];
            isOneToOne: false;
            referencedRelation: "EVALUATION";
            referencedColumns: ["id_evaluation"];
          },
          {
            foreignKeyName: "public_EVALUATION_EXERCISE_id_exercise_fkey";
            columns: ["id_exercise"];
            isOneToOne: false;
            referencedRelation: "EXERCISE";
            referencedColumns: ["id_exercise"];
          }
        ];
      };
      EXERCISE: {
        Row: {
          id_exercise: number;
          id_practice: number;
          order: number;
          text_repeat: string;
        };
        Insert: {
          id_exercise?: string;
          id_practice: string;
          order: number;
          text_repeat: string;
        };
        Update: {
          id_exercise?: string;
          id_practice?: string;
          order?: number;
          text_repeat?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_EXERCISE_id_practice_fkey";
            columns: ["id_practice"];
            isOneToOne: false;
            referencedRelation: "PRACTICE";
            referencedColumns: ["id_practice"];
          }
        ];
      };
      PARENT: {
        Row: {
          dashboard_key: string | null;
          id_parent: string;
          id_profile: string;
        };
        Insert: {
          dashboard_key?: string | null;
          id_parent?: string;
          id_profile: string;
        };
        Update: {
          dashboard_key?: string | null;
          id_parent?: string;
          id_profile?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_PARENT_id_profile_fkey";
            columns: ["id_profile"];
            isOneToOne: true;
            referencedRelation: "PROFILE";
            referencedColumns: ["id_profile"];
          }
        ];
      };
      PRACTICE: {
        Row: {
          created_at: string;
          description: string | null;
          free: boolean;
          help: string | null;
          id_practice: string;
          id_specialist: string;
          title: string;
          type: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          free: boolean;
          help?: string | null;
          id_practice?: string;
          id_specialist: string;
          title: string;
          type: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          free?: boolean;
          help?: string | null;
          id_practice?: string;
          id_specialist?: string;
          title?: string;
          type?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_PRACTICE_id_specialist_fkey";
            columns: ["id_specialist"];
            isOneToOne: false;
            referencedRelation: "SPECIALIST";
            referencedColumns: ["id_specialist"];
          }
        ];
      };
      PROFILE: {
        Row: {
          avatar_url: string | null;
          cellphone: string | null;
          created_at: string;
          email: string;
          first_name: string;
          id_profile: string;
          id_user: string;
          last_name: string;
          role: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          cellphone?: string | null;
          created_at?: string;
          email: string;
          first_name: string;
          id_profile?: string;
          id_user: string;
          last_name: string;
          role?: string;
        };
        Update: {
          avatar_url?: string | null;
          cellphone?: string | null;
          created_at?: string;
          email?: string;
          first_name?: string;
          id_profile?: string;
          id_user?: string;
          last_name?: string;
          role?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_PROFILE_id_user_fkey";
            columns: ["id_user"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      SPECIALIST: {
        Row: {
          id_profile: string;
          id_specialist: string;
          office_address: string | null;
        };
        Insert: {
          id_profile: string;
          id_specialist?: string;
          office_address?: string | null;
        };
        Update: {
          id_profile?: string;
          id_specialist?: string;
          office_address?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_SPECIALIST_id_profile_fkey";
            columns: ["id_profile"];
            isOneToOne: true;
            referencedRelation: "PROFILE";
            referencedColumns: ["id_profile"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
