
import React, { useState } from 'react';
import { Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import RecruitmentDialog from './RecruitmentDialog';

const RecruitmentBanner = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="section-padding bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
          <Card className="border-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">Rejoignez notre équipe</h2>
                    <p className="text-gray-600">
                      Vous êtes un professionnel du froid passionné ? Nous recherchons des talents pour renforcer notre équipe d'experts.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Button 
                    onClick={() => setIsDialogOpen(true)}
                    size="lg"
                    className="btn-primary whitespace-nowrap"
                  >
                    <Briefcase className="h-5 w-5 mr-2" />
                    Postuler maintenant
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Candidature en 2 minutes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <RecruitmentDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default RecruitmentBanner;
